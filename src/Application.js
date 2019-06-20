import 'arrive'
import properties from './props'

export default class Application {
  constructor(aProps) {
    const props = { ...aProps, ...properties }
    if (this.handle === undefined) {
      throw new TypeError("Must override method");
    }
    this.hasCointainer =  props.hasCointainer
    this.runOnce =  props.runOnce
    this.containerId = props.containerId
  }
  run(root){
    const { containerId, runOnce, hasCointainer } = this
    return new Promise((resolve, reject) => {
      if(hasCointainer){
        document.arrive(`#${containerId}`, function () {
          // 'this' refers to the newly created element
          if(runOnce) document.unbindArrive(`#${containerId}`)
          resolve(containerId)
        })
      }

      this.handle(root)
      // not sure if necessary.
      if(!hasCointainer) resolve('')
    })
  }
}
