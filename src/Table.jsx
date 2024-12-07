import React, { useState, useEffect } from 'react';

/**
 * Table
 *
 * A table component that renders a table of data.
 *
 * @returns {React.ReactElement} The table element.
 */
const Table = () => {
    const arr = [
        { date: "2022-09-01", views: 100, article: "Article 1" },
        { date: "2023-09-01", views: 100, article: "Article 1" },
        { date: "2023-09-02", views: 150, article: "Article 2" },
        { date: "2023-09-02", views: 120, article: "Article 3" },
        { date: "2020-09-03", views: 200, article: "Article 4" }
    ];

    const [table, setTable] = useState(arr);

    useEffect(() => {
        console.log("Table data initialized:", table);
    }, [table]);

    
function sortViews(){
   setTable( arr.sort((a,b) => a.views - b.views))
}
function sortDates(){
setTable(arr.sort((a,b) => new Date(a.date) - new Date(b.date)))
}
    
    return (
        <div>
            <button onClick={sortDates}>Sort by Date</button>
            <button onClick={sortViews}>Sort by Views</button>
            <table>
                <tr>
                    <th>Date</th>
                    <th>Views</th>
                    <th>Article</th>
                </tr>
               { table.length > 1 ? table.map( (item)=>
               <tr>
               <td>{item.date}</td>
               <td>{item.views}</td>
               <td>{item.article}</td>
           </tr> 
           ) : <>Hello</>
                }
                
                

            </table>

        </div>
    )
}
export default Table