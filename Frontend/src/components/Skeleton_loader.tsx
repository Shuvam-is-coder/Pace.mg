import React from 'react'

const Skeleton_loader = () => {
  return (
    <div>
        <h3 className="mb-4 mt-6">Skeleton Loader</h3>
        <div className="card">
          <div className="flex items-center gap-3 mb-4">
            <div className="skeleton skeleton-avatar"></div>
            <div style={{ flex: 1 }}>
              <div className="skeleton skeleton-heading"></div>
              <div
                className="skeleton skeleton-text"
                style={{ width: '40%' }}
              ></div>
            </div>
          </div>
          <div className="skeleton skeleton-text"></div>
          <div className="skeleton skeleton-text" style={{ width: '80%' }}></div>
          <div className="skeleton skeleton-text" style={{ width: '60%' }}></div>
        </div>
    </div>
  )
}

export default Skeleton_loader
