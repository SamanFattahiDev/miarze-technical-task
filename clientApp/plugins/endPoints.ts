import requestBodies from '../requests/requests'
import {Context, Inject} from "@nuxt/types/app";

export default (context: Context, inject: Inject) => {
  const apiEndPoints = {
    getAllProducts: requestBodies(context, 'posts')
  }
  inject('api', apiEndPoints)

}
