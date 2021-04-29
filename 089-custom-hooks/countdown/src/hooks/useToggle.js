// initialize state 
// create any functions we need for modifying the state
// return whatever we want another component to have access to

import { useState } from "react"

function useToggle(initialBoolean = true){
  const [on, setSwitch] = useState(initialBoolean)

  function toggle(){
    setSwitch(prev => !prev)
  }

  //function hardSetToOn

  //function hardSetToOff

  return [on, toggle]
  //return {on, toggle, hardSetToOn, hardSetToOff}
}

export {useToggle}

// useToggle() => {on: (boolean), toggle: (function)}

