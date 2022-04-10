import './widgetLg.css';

const Widgetlg = () => {
    const Button = ({type}) =>{
        return <button className={'widgetLgButton ' + type}>{type}</button>
    };
    return (
        <div className='widgetLg'>
            <h3 className="widgetLgTitle">Latest transactions</h3>
            <table className="widgetLgTable">
                <tbody>
                <tr className="widgetLgTr">
                    <th className="widgetLgTh">Customer</th>
                    <th className="widgetLgTh">Date</th>
                    <th className="widgetLgTh">Amount</th>
                    <th className="widgetLgTh">Status</th>
                </tr>
                <tr className="widgetLgtr">
                    <td className="widgetLgUser">
                        <img src="https://cdn.i-scmp.com/sites/default/files/d8/images/methode/2020/06/24/cf9d675c-b1fe-11ea-953d-a7ecc5cbd229_image_hires_144326.jpg" alt="" className="widgetLgImg" />
                      <span className="widgetLgName">Thaquidheen</span>
                    </td>
                    <td className="widgetLgDate">2 jun 2022</td>
                    <td className="widgetLgAmount">$2451</td>
                    <td className="widgetLgStatus">
                        <Button type="Approved"/>
                    </td>
                </tr>
                <tr className="widgetLgtr">
                    <td className="widgetLgUser">
                        <img src="https://cdn.i-scmp.com/sites/default/files/d8/images/methode/2020/06/24/cf9d675c-b1fe-11ea-953d-a7ecc5cbd229_image_hires_144326.jpg" alt="" className="widgetLgImg" />
                      <span className="widgetLgName">Thaquidheen</span>
                    </td>
                    <td className="widgetLgDate">2 jun 2022</td>
                    <td className="widgetLgAmount">$2451</td>
                    <td className="widgetLgStatus">
                        <Button type="Decline"/>
                    </td>
                </tr>
                <tr className="widgetLgtr">
                    <td className="widgetLgUser">
                        <img src="https://cdn.i-scmp.com/sites/default/files/d8/images/methode/2020/06/24/cf9d675c-b1fe-11ea-953d-a7ecc5cbd229_image_hires_144326.jpg" alt="" className="widgetLgImg" />
                      <span className="widgetLgName">Thaquidheen</span>
                    </td>
                    <td className="widgetLgDate">2 jun 2022</td>
                    <td className="widgetLgAmount">$2451</td>
                    <td className="widgetLgStatus">
                        <Button type="Pending"/>
                    </td>
                </tr>
                <tr className="widgetLgtr">
                    <td className="widgetLgUser">
                        <img src="https://cdn.i-scmp.com/sites/default/files/d8/images/methode/2020/06/24/cf9d675c-b1fe-11ea-953d-a7ecc5cbd229_image_hires_144326.jpg" alt="" className="widgetLgImg" />
                      <span className="widgetLgName">Thaquidheen</span>
                    </td>
                    <td className="widgetLgDate">2 jun 2022</td>
                    <td className="widgetLgAmount">$2451</td>
                    <td className="widgetLgStatus">
                        <Button type="Approved"/>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Widgetlg;
