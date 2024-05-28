import React from 'react';
import JsonData from './Leaderboard.json';
import './Leaderboard.css';
import { Dropdown, ButtonGroup } from 'react-bootstrap';

function Leaderboard() {
  
  const DisplayData = JsonData.map((info) => {
    return (
      <tr key={info.id} >
        <td>{info.id}</td>
        <td>{info.name}</td>
        <td>
            {info.calmarRatio > 0 &&  
                <img src="assets/calmarRatioProfit.png" alt="Chart Line" className="calmar-ratio-icon" /> 
            }
            {info.calmarRatio < 0 &&  
                <img src="assets/calmarRatioLoss.png" alt="Chart Line" className="calmar-ratio-icon" /> }
            {info.calmarRatio}
        </td>
        <td>{info.overallProfit}</td>
        <td>{info.avgDailyProfit}</td>
        <td>{info.winPercent}</td>
        <td>{info.price ? info.price : '-'}</td> 
      </tr>
    );
  });

  return (
    <div className='body pt-3 m-3' id="leaderboard">
        <h1 className='head text-center text-light m-5 p-5'>
        <img src="assets/star.png" alt="Leaderboard" className="floating-image1" />
          LeaderBoards
        <img src="assets/star.png" alt="Leaderboard" className="floating-image2" />

        </h1>

        <div className='tab container p-3 pb-1'>
            <h2 className='text-light p-3' >Basic Backtest</h2>
                  <Dropdown as={ButtonGroup}>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
              Slippage
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">0%</Dropdown.Item>
              <Dropdown.Item href="#/action-2">0.5%</Dropdown.Item>
              <Dropdown.Item href="#/action-3">1%</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Rank <button className='ms-auto border-0 bg-transparent'>↓↑</button></th>
                        <th>Name <button className='ms-auto border-0 bg-transparent'>↓↑</button></th>
                        <th>Calmar Ratio <button className='ms-auto border-0 bg-transparent'>↓↑</button></th>
                        <th>Overall Profit <button className='ms-auto border-0 bg-transparent'>↓↑</button></th>
                        <th>Avg. Daily Profit <button className='ms-auto border-0 bg-transparent'>↓↑</button></th>
                        <th>Win %(Day) <button className='ms-auto border-0 bg-transparent'>↓↑</button></th>
                        <th>Price (Rs) <button className='ms-auto border-0 bg-transparent'>↓↑</button></th>
                    </tr>
                </thead>
                <tbody>
                    {DisplayData}
                </tbody> 
            </table>
        </div>
    </div>
  );
}

export default Leaderboard;
