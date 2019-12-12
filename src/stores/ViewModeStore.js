import { observable, action } from 'mobx';
import { getFilterOptions, getCSVFile } from '@/stores/wrd_apis';

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
    // Building
    getFilterOptions('building')
      .then(options => {
        for (let i = 0; i < options.length; i++) {
          this.optBuildings.push(options[i].name || '');
        }
        this.isBdSet = true;
      });

    // District
    getFilterOptions('district')
      .then(options => {
        for (let i = 0; i < options.length; i++) {
          this.optDistricts.push(options[i].name || '');
        }
        this.isDsSet = true;
      });

    // class
    getFilterOptions('class')
      .then(options => {
        for (let i = 0; i < options.length; i++) {
          this.optClasses.push(options[i].name || '');
        }
        this.isClSet = true;
      });

    // class
    getFilterOptions('student')
      .then(options => {
        for (let i = 0; i < options.length; i++) {
          this.optStudents.push(options[i].name || '');
        }
        this.isStSet = true;
      });
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
