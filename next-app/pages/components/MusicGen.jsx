import React, { useState } from 'react';

function MusicGen({ imageSrc, cid }) {
    const [jobId, setJobId] = useState('');

    const onSubmit = async () => {
        const response = await fetch('/api/execute', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const data = await response.json();
        if (data.jobId) {
          setJobId(data.jobId);
        }
    };

    return (
        <div>
            {imageSrc && <img src={imageSrc} alt="IPFS content" />}
            {cid && <p>CID: {cid}</p>}
            <button onClick={onSubmit}>Jobを実行</button>
            {jobId && <p>Job ID: {jobId}</p>}
        </div>
    );
}

export default MusicGen;