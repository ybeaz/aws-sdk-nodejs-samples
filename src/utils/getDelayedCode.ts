interface IGetDelayedCode {
  (t: number): Promise<void>
}

/**
 * @description Function to pause the code at t miliseconds
 */

export const getDelayedCode: IGetDelayedCode = t => {
  return new Promise(function (resolve) {
    setTimeout(resolve, t)
  })
}
