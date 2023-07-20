import { useFormik } from "formik";

import ChooseOption from "../ChooseOption/ChooseOption";
import ChoiseDoneNext from "../ChoiseDoneNext/ChoiseDoneNext";
import ChoiseCancelPrev from "../ChoiseCancelPrev/ChoiseCancelPrev";

import { ButtonsWrapper, ChooseOptionWrapper, MyForm } from "./FormAddPet.styled";

const initialValues = {
  option: "",
}

function FormAddPet({ currentPage, setCurrentPage }) {

  const handleDefinePage = value => () => {
    if (value === -1 && currentPage === 0) return;

    setCurrentPage(prev => prev + value);
  }

  const onSubmit = (values) => {
    console.log(values);
  }

  const formik = useFormik({ initialValues, onSubmit });

  return (
    <MyForm onSubmit={formik.handleSubmit}>
      <ChooseOptionWrapper>
        <ChooseOption formik={formik} />
      </ChooseOptionWrapper>

      <ButtonsWrapper>
        <ChoiseDoneNext
          currentPage={currentPage}
          handleDefinePage={handleDefinePage}
          disabled={formik.values.option === ""}
        />
        <ChoiseCancelPrev
          currentPage={currentPage}
          handleDefinePage={handleDefinePage}
        />
      </ButtonsWrapper>
     </MyForm>
  )
}

export default FormAddPet;