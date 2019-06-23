import { Application, props } from '..'

// Mocks props
props.containerId = "containerTest"
props.runOnce = false
props.hasCointainer = false

// Mock Application
const mockfn = jest.fn(x => x)
class ExtendedApplication extends Application{
  handle(root){
    mockfn(root)
  }
}

describe('Application test', () => {
  let app
  beforeEach(() => {
    app = new ExtendedApplication()
  })
  it('test handle override TypeError', () => {
    expect(() => {return new Application()}).toThrow(TypeError)
  })
  it('test properties', () => {
    expect(app.containerId).toBe("containerTest")
  })
  it('test handle function to be called', () => {
    app.run('root')
    expect(mockfn).toBeCalled()
  })
  it('test run function to return a promise', () => {
    const promise = app.run('root').catch(()=>{})
    expect(promise).toBeInstanceOf(Promise)
  })
  it('test handle function to resolve whe runOnce is true', () => {
    const app = new ExtendedApplication({runOnce: true})
    expect(app.run('root').catch(()=>{})).resolves.toBe('')
  })
})
