import once from 'lodash/once';

import SnackbarStore from './SnackbarStore';
import ViewModeStore from './ViewModeStore';

const SNACKBARSTORE = 'SnackbarStore';
const VIEWMODESTORE = 'ViewModeStore';

export const STORE_KEYS = {
    SNACKBARSTORE,
    VIEWMODESTORE,
};

export default once(() => {
    const snackbarStore = SnackbarStore();
    const viewModeStore = ViewModeStore();

    return {
        [STORE_KEYS.SNACKBARSTORE]: snackbarStore,
        [STORE_KEYS.VIEWMODESTORE]: viewModeStore,
    };
});
