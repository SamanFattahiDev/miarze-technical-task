import {Inject} from "@nuxt/types/app";

// @ts-ignore
export default ({ app, store }, inject:Inject) => {
  inject("toast", {
    success( message = "" ) {
      store.commit("toast/success",message);
    },error( message = "" ) {
      store.commit("toast/error", message);
    }

  });
};
