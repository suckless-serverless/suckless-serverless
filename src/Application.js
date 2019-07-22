import 'arrive'
import properties from './props'

export default class Application {
  constructor(aProps) {
    const props = { ...properties, ...aProps }
    if (this.handle === undefined) {
      throw new TypeError("Must override method");
    }
    this.hasContainer =  props.hasContainer
    this.runOnce =  props.runOnce
    this.containerId = props.containerId
  }
  run(root){
    const { containerId, runOnce, hasContainer } = this
    return new Promise((resolve, reject) => {
      try {
        if(hasContainer){
          document.arrive(`#${containerId}`, function () {
            // 'this' refers to the newly created element
            if(runOnce) document.unbindArrive(`#${containerId}`)
            resolve(containerId)
          })
        }

        this.handle(root)
        // not sure if necessary.
        if(!hasContainer) resolve('none')
      } catch(e){
        reject(e)
      }

    })
  }
}
