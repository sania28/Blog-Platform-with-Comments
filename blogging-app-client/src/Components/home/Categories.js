import { Button, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material"

export const Categories = (props) => {



    const categories = [{id:1, value: "Music"} ,{value:  "Movies"},{value:  "Sports"}, {value: "Technology"},{value:  "Fashion"}];

    return (

        <Table style={{ borderRadius:"20px" , marginTop:"10px",backgroundColor:"white" }}>
            <TableHead>

                <TableRow style={{cursor:"pointer"}}>
                    <TableCell onClick={()=>{
                        props.onCategoryClick("");
                    }}>

                        All Categories
                    </TableCell>
                </TableRow>
            </TableHead>

            <TableBody>


                {categories.map((category) => (
                   
                    <TableRow className="category-button"  key={Math.random()}> 
                    <TableCell onClick={()=>{
                        props.onCategoryClick(category.value);
                    }}>

                        {category.value}
                    </TableCell>
                    </TableRow>
                   
                ))}

               

            </TableBody>

        </Table>

    )



}