import React from 'react';
import APIService from '../../service/APIService';
import DataHistory from './DataHistory';
export default function History() {
  const [points, setpoints] = React.useState([]);
  React.useEffect(() => {
    //useEffect bazidan wamoghebis magaliti
    APIService.getPoints().then(res => {
      setpoints(res.data);
    });
  }, [setpoints]);
  return (
    <div>
      <DataHistory data={points} />
    </div>
  );
}
