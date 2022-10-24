import React, { useState } from 'react';
import Modal from '../../../../components/Modal/Modal';
import './MainRecommendItem.scss';

const MainRecommendItem = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className="mainRecommendItem">
      {open && (
        <Modal
          type="default"
          contents={contents}
          close={() => {
            setOpen(false);
          }}
        />
      )}
    </div>
  );
};

const contents = {
  id: 0,
  title: '삭제하시겠습니까?',
  type: 'delete',
};

export default MainRecommendItem;
