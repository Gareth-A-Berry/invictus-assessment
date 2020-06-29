import React from 'react';

const TableHeader = () => {
  return (
    <div className="table-header">
      <div className="table-cell--one table-cell--text-header">#</div>
      <div className="table-cell--n table-cell--text-header">Title</div>
      <div className="table-cell--n table-cell--text-header">Artist</div>
      <div className="table-cell--n table-cell--text-header">Time</div>
      <div className="table-cell--n table-cell--text-header">Released</div>
    </div>
  );
};

export default TableHeader;
