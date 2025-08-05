import './App.css'
import React, { useState } from 'react'

// const user = {
//   name: "Hedy lamarr",
//   imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
//   iamgeSize: 90,
// }

// function Button() {
//   const [count, setCount] = useState(0);

//   function handleClick() {
//     setCount(count + 1);
//   }
//   return (
//       <button onClick={handleClick}>Click {count} <span> {(count > 1) ? 'times' : 'time'} </span></button>
//     );
// }

function App() {

  // const isLoggedIn = true


  // let formate;
  // if (count > 1) {
  //   formate = "times"
  // } else {
  //   formate = "time"
  // }


  // let content;
  // if(isLoggedIn){
  //   content = <h1>Content found</h1>
  // }else {
  //   content = <h1>Not found</h1>
  // }

  // const products = [
  //   { title: 'Cabbage', id: 1 },
  //   { title: 'Garlic', id: 2 },
  //   { title: 'Apple', id: 3 },
  // ];

  const products = [
    { title: 'Cabbage', isFruit: false, id: 1 },
    { title: 'Garlic', isFruit: false, id: 2 },
    { title: 'Apple', isFruit: true, id: 3 },
  ];

  const listItems = products.map(product =>
    <li key={product.id} style={{ color: product.isFruit ? 'magenta' : 'darkgreen' }}
      className='flex p-1 pl-2 m-1 font-mono text-lg text-blue-600 line-through justify-normal '
    >
      {product.title}
    </li>
  )

  // const alertMsg = (() => {
  //   alert("You clicked me!")
  // })

  // function handleClick() {
  //   if (count <= 20) {
  //     setCount(count + 1);
  //   }
  // }
  // function removeValue() {
  //   setCount(count - 1);
  //   // if(count>=1){
  //   //   setCount(count - 1);
  //   // }

  // }
  // const [count, setCount] = useState(0);

  // function handleClick() {
  //   setCount(count + 1);
  // }

  const [count, setCount] = React.useState(0)
  const handleCount = (()=>{
    setCount(count+1)
  })



  return (
    < >
      <div >
        {/* <h1>{user.name}</h1> */}
        {/* <img
        className='avatar'
        src={user.imageUrl} 
        alt={"Photo of"+ user.name}
        style={{
          width: user.iamgeSize,
          height: user.iamgeSize
        }}
      /> */}
        {/* <div>
        {isLoggedIn? ( <h1>content found</h1>) : ( <h1>Error</h1> )}
        {isLoggedIn && (<h1>content found</h1>)}
      </div> */}


        {/* <div>
        <ul className='text-base '>
          {products.map((product) =>
            <li className='flex p-1 pl-2 m-1 font-mono text-lg text-blue-600 line-through justify-normal ' key={product.id}>
            {product.title}
            </li>
          )}
        </ul>
      </div> */}

        {/* <ul>
          {listItems}
        </ul> */}

        {/* <button onClick={alertMsg}>Click me</button> <br /> */}
        {/* <button onClick={handleClick}>Click {count} <span> {(count> 1  || count < -1) ? 'times': 'time'} </span></button>
      <button onClick={removeValue}>Click {count} <span> {(count> 1 || count < -1) ? 'times': 'time'} </span></button> */}

        {/* <div >
          <h2>Counter that update together..</h2>
          <Button count={count} onClick={handleClick} />
          <Button count={count} onClick={handleClick} />
        </div> */}


        <MyButton count={count} onclick={handleCount} />
        <MyButton count={count} onclick={handleCount} />

      </div>



    </>
  )
}

export default App;


// function Button({ count, onClick }) {
//   return (
//     <button onClick={onClick}>
//       Clicked {count} times
//     </button>
//   );
// }




const MyButton = ( ({count, onclick}) => {
  return(
    <div>
      <button onClick={onclick}>Clicked {count} times!</button>
    </div>

  );
})


