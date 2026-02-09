
// import from 'react'
import data from '../../data'
import { useParams } from 'react-router-dom'
function SingleRecipe() {
   const queryParms =useParams()
   console.log(queryParms)
    const filteredRecipe=data.recipes.filter(x=>x.id == Number(queryParms.id))
    console.log(filteredRecipe)
  return (
    <div>
       <h2> {filteredRecipe[0].name}</h2>
       <img src={filteredRecipe[0].image} width={200}/>
    </div>
  )
}

export default SingleRecipe