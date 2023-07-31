import React from 'react';
import Card from './Cards';
import Sdata from './data';
import Heading from './Heading';
const App = () => (

<>
   <Heading />
   {Sdata.map((Props, i) => {
    console.log(i);
   return( 
    <Card
       key = {Props.id}
       name = {Props.name}
       image = {Props.image}
       title = {Props.title}
       links = {Props.links}
    />
  );
  })}
</>
)
export default App;