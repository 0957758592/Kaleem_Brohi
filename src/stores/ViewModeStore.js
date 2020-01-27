import { decorate, observable, action, configure } from "mobx";
import axios from "axios";
import {
  getFilterOptionsBuilding,
  getFilterOptionsDistrict,
  getFilterOptionsClass,
  getFilterOptionsEvent,
  //defaultConnection,
  getCSVFile
} from "@/stores/wrd_apis";

class ViewModeStore {

  optBuildings = [];
  isBdSet = false;

  optDistricts = [];
  isDsSet = false;

  optEvents = [];
  isEvSet = false;

  optClasses = [];
  isClSet = false;

  optStudents = [];
  isStSet = false;

  postQuery = {};

  errorData = []

  isGradeSelected = false;

  isBuildingsSelected = false;

  isDistrictSelected = false;

  isClassSelected = false;

  isEmptyData = false;

  isConnectionError = false;

  constructor() {
    /*defaultConnection()
    .then(res => {
        if(res){
        console.log("RES--", res)
            //return res.message
        } else {
            this.getData;
        }
    })
    .catch(err => {

    console.log("ERR--",err)
    //this.isConnectionError = true
    //this.errorData.push("service is down")

    })
*/
   // const getData = () => {
       getFilterOptionsEvent().then(options => {
         for (let i = 0; i < options.length; i++) {
           this.optEvents.push(options[i] || "");
         }
         this.isEvSet = true;
       });

    getFilterOptionsDistrict().then(options => {
      let districts = [];
      for (let i = 0; i < options.length; i++) {
        this.optDistricts.push(options[i] || "");
      }
      this.isDsSet = true;
      const buildings = options.map(item => item.id);
      getFilterOptionsBuilding(buildings.join(",")).then(options => {
        for (let i = 0; i < options.length; i++) {
          this.optBuildings.push(options[i] || "");
        }
        this.isBdSet = true;
        const classes = options.map(item => item.id);
        getFilterOptionsClass(classes.join(",")).then(options => {
          for (let i = 0; i < options.length; i++) {
            this.optClasses.push(options[i] || "");
          }
          this.isClSet = true;
        });
      });
    });
    // student
    //getFilterOptions('student')
    //.then(options => {
    //for (let i = 0; i < options.length; i++) {
    // this.optStudents.push(options[i].name || '');
    //}
    // this.isStSet = true;
    // });
   // }
  }

  setIsGradeSelected = (value) => {
    this.isGradeSelected = value;
  };

  setIsBuildingsSelected = (value) => {
    this.isBuildingsSelected = value;
  };

  setIsDistrictSelected = (value) => {
    this.isDistrictSelected = value;
  };

  setIsClassSelected = (value) => {
    this.isClassSelected = value;
  };

  setDistrictsOpt(value) {
    this.optDistricts = [...value];
  }
  setPostQuery(name, value) {
    this.postQuery = {
      ...this.postQuery,
      [name]: value
    };
  }


  setBuildingOpt(value) {
    this.optBuildings = [...value];
  }

    setIsEventsSelected(value) {
      this.optEvents = value;
    }

  setClassesOpt(value) {
    this.optClassessetPostQuery= {
      ...this.postQuery,
      [name]: value
    };
  }

  setEmptyData = (condition) => {
    this.isEmptyData = condition;
  }

  getDownloadFile = async (data, setIsLoading) => {
    const URL = "http://localhost:9201/adaptive/v1/research?"
    const checkingUrlData = "http://localhost:9201/adaptive/v1/research/count"
    axios.get(checkingUrlData, {}).then((res) => {
      console.log("res", res);
      if (res.data > 0) {
        this.downloadFile(setIsLoading, URL, data)
      } else {
        console.log("No Record found of given search")
        this.setEmptyData(true);
      }
    }).catch(err => {
      this.setEmptyData(true);
      console.log("ERR" , err)
    })
  }

  downloadFile(setIsLoading, URL, data) {
  console.log(`${URL}${data}`)

  const URI = !data ? URL : `${URL}${data}`
    axios.get(URI, {
    })
      .then((res) => {
        if (res) {
          console.log("res", res)
          window.location.href = `${URL}${data}`
          console.log("href")
          return res
        }
      })
      .then((res) => {
        //console.log("data", data)
        //window.open(`${URL}${data}`, "_blanc");
        //window.location.href = URL;
        console.log("res2", res)
      })
      .catch(err => console.log("err", err))
      .finally(() => {
       //window.open(URI, "_blanc");
       console.log("finally")
        setIsLoading(false)
      })
  }

}

decorate(ViewModeStore, {
  optBuildings: observable,
  isBdSet: observable,
  optDistricts: observable,
  isDsSet: observable,
  optEvents: observable,
  isEvSet: observable,
  optClasses: observable,
  isClSet: observable,
  optStudents: observable,
  isStSet: observable,
  postQuery: observable,
  isDistrictSelected: observable,
  isBuildingsSelected: observable,
  isGradeSelected: observable,
  getDownloadFile: action,
  setBuildingOpt: action.bound,
  setDistrictsOpt: action.bound,
  setIsEventsSelected: action.bound,
  setClassesOpt: action.bound,
  setPostQuery: action.bound,
  setIsBuildingsSelected: action.bound,
  setIsDistrictSelected: action.bound,
  setIsGradeSelected: action,
  isEmptyData: observable,
  setEmptyData: action.bound
  //isConnectionError: observable,
  //errorData: action.bound
});

export default () => new ViewModeStore();
