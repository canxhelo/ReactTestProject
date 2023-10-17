import React from 'react';

const DepartmentTree = ({ departments }) => {

  const renderTree = (nodes) => {
    if (!nodes || nodes.length === 0) return null;

    return (
      <ul>
        {nodes.map(node => (
          <li key={node.id}>
            {node.name}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="department-tree">
      <h2>Departments</h2>
      {renderTree(departments)}
    </div>
  );
};

export default DepartmentTree;
