import { decorate, observable, action, configure } from "mobx";
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

  constructor() {
    // District
    getFilterOptionsDistrict().then(options => {
      let districts = [];
      for (let i = 0; i < options.length; i++) {
        this.optDistricts.push(options[i] || "");
      }
      this.isDsSet = true;
    });

    // Building
    getFilterOptionsBuilding(
      "635568,635504,619716,635650,635603,635586,619594"
    ).then(options => {
      for (let i = 0; i < options.length; i++) {
        this.optBuildings.push(options[i] || "");
      }
      this.isBdSet = true;
    });

    // class
    getFilterOptionsClass("635652,635570,619717").then(options => {
      for (let i = 0; i < options.length; i++) {
        this.optClasses.push(options[i] || "");
      }
      this.isClSet = true;
    });

    // // student
    // getFilterOptions('student')
    //   .then(options => {
    //     for (let i = 0; i < options.length; i++) {
    //       this.optStudents.push(options[i].name || '');
    //     }
    //     this.isStSet = true;
    //   });
  }

  setDistrictsOpt(value) {
    this.optDistricts = [...value];
  }

  setBuildingOpt(value) {
    this.optBuildings = [...value];
  }

  setClassesOpt(value) {
    this.optClasses = [...value];
  }

  getDownloadFile() {
    getCSVFile("").then(data => {
      console.log("csv:", data);
      window.location.href = `https://s3.us-east-2.amazonaws.com/student-reports201911/${data}.csv`;
    });
  }

  // async getFilterOptionsClassBySelect(opt) {
  //   this.optClasses = [];
  //   this.state = "pending";
  //   try {
  //     const classes = await getFilterOptionsClass(opt.join(","));
  //     console.log(classes);
  //     runInAction(() => {
  //       this.state = "done";
  //       for (let i = 0; i < classes.length; i++) {
  //         this.optClasses.push(options[i].name || "");
  //       }
  //     });
  //   } catch (error) {
  //     runInAction(() => {
  //       this.state = "error";
  //     });
  //   }
  // }
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
  getDownloadFile: action,
  setBuildingOpt: action.bound,
  setDistrictsOpt: action.bound,
  setClassesOpt: action.bound,
});

export default () => new ViewModeStore();
