import { observable, action } from 'mobx';
import { getFilterOptionsBuilding, getFilterOptionsDistrict, getFilterOptionsClass, getCSVFile } from '@/stores/wrd_apis';
// import { getFilterOptionsBuilding, getFilterOptionsDistrict, getFilterOptionsClass } from './wrd_apis';

class ViewModeStore {
  @observable.shallow optBuildings = [];
  @observable isBdSet = false;

  @observable.shallow optDistricts = [];
  @observable isDsSet = false;

  @observable.shallow optClasses = [];
  @observable isClSet = false;

  @observable.shallow optStudents = [];
  @observable isStSet = false;

  constructor() {

    // District
    getFilterOptionsDistrict()
      .then(options => {
        for (let i = 0; i < options.length; i++) {
          this.optDistricts.push(options[i].name || '');
        }
        this.isDsSet = true;
      });

    // Building
    getFilterOptionsBuilding('635568,635504,619716,635650,635603,635586,619594')
      .then(options => {
        for (let i = 0; i < options.length; i++) {
          this.optBuildings.push(options[i].name || '');
        }
        this.isBdSet = true;
      });

    // class
    getFilterOptionsClass('635652,635570,619717')
      .then(options => {
        for (let i = 0; i < options.length; i++) {
          this.optClasses.push(options[i].name || '');
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

  @action.bound getDownloadFile() {
    getCSVFile('')
      .then(data => {
        console.log('csv:', data);
        window.location.href = `https://s3.us-east-2.amazonaws.com/student-reports201911/${data}.csv`;
      });
  }
}

export default () => new ViewModeStore();
