import { useCallback, useState } from "react";

const useCustom = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = useCallback(() => {
    setShowModal(!showModal);
  }, [showModal]);

  return {
    data: {
      showModal,
    },
    methods: {
      handleShowModal,
    },
  };
};

export default useCustom;
