import { decorate, observable, action, configure } from "mobx";
import axios from "axios";
import {
  getFilterOptionsBuilding,
  getFilterOptionsDistrict,
  getFilterOptionsClass,
  getCSVFile
} from "@/stores/wrd_apis";

class ViewModeStore {
  optBuildings = [];
  isBdSet = false;

  optDistricts = [];
  isDsSet = false;

  optClasses = [];
  isClSet = false;

  optStudents = [];
  isStSet = false;

  postQuery = {};

  isGradeSelected = false;

  isBuildingsSelected = false;

  isDistrictSelected = false;

  isClassSelected = false;

  constructor() {
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
    // getFilterOptionsStudent('student')
    //   .then(options => {
    //     for (let i = 0; i < options.length; i++) {
    //       this.optStudents.push(options[i].name || '');
    //     }
    //     this.isStSet = true;
    //   });
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

  setClassesOpt(value) {
    this.optClasses = [...value];
  }
  setPostQuery(name, value) {
    this.postQuery = {
      ...this.postQuery,
      [name]: value
    };
  }
  
  getDownloadFile(data, setIsLoading) {
    const URL = "http://localhost:9201/adaptive/v1/research?"
    axios.get(`${URL}${data}`).then((res) => {
      console.log(res)
    })
      .then((data) => {
        console.log(data)
      })
      .catch(err => { console.log(err) })
      .finally(() => {
        window.location.href = `${URL}${data}`;
        setIsLoading(true);
      })
  }
}

decorate(ViewModeStore, {
  optBuildings: observable,
  isBdSet: observable,
  optDistricts: observable,
  isDsSet: observable,
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
  setClassesOpt: action.bound,
  setPostQuery: action.bound,
  setIsBuildingsSelected: action.bound,
  setIsDistrictSelected: action.bound,
  setIsGradeSelected: action
});

export default () => new ViewModeStore();
