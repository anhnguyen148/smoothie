export default function Orders() {
    return (
        <div className="container-fluid">
            <h1 className="h3 mb-2 text-gray-800">Orders</h1>
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Pending Orders</h6>                   
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                            <thead>
                                <tr>
                                    <th>No.</th>
                                    <th>Customer Name</th>
                                    <th>Drink Name</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            {/* <tbody>
                                {drinksList.map((item, index) => {     
                                    return(                            
                                        <tr key={index}>
                                            <td>{item["drink_id"]}</td>
                                            <td>{item["name"]}</td>
                                            <td>{item["description"]}</td>
                                            <td>{item["price"]}</td>
                                            <td>{item["type"]}</td>
                                            <td>
                                                <a href="#" className="btn btn-primary btn-icon-split">
                                                    <span className="text">Edit</span>
                                                </a>
                                                <a href="#" className="btn btn-danger btn-icon-split mx-1">
                                                    <span className="text">Del</span>
                                                </a>
                                            </td>
                                        </tr>
                                    )   
                                })}                                
                            </tbody> */}
                            <tfoot>
                                <tr>
                                    <th>No.</th>
                                    <th>Drink</th>
                                    <th>Description</th>
                                    <th>Image</th>
                                    <th>Price</th>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>
        </div>    
    )
}