/* const validateINN = () => {};
const validateBIK = () => {};
const validateBankName = () => {};

const validateForm = () => {
  if (isForeign) {
    validateForeignINN();
    validateForeignBIK();
    validateForeignBankName();
  }
  {
    validateBIK();
    validateINN();
    validateBankName();
  }
};

const saveRequistes = () => {
  // Відправляємо реквізити по HTTP
};

const resetForm = () => {
  // логіка по обнуленню полів
};

interface RequistesProps {
  onSave: (obj) => void;
  onReset: () => void;
  title: string;
}

const ForeignRequistes = (props: RequistesProps) => {
  const validateForeignForm = () => {
    // правила валідації
  };

  const saveHandler = () => {
    validateForeignForm();
    props.onSave({});
  };

  return (
    <Requistes
      onSave={saveHandelr}
      onReset={props.onReset}
      title={props.title}
    />
  );
};

const UkrainianRequistes = (props: RequistesProps) => {
  const validateUkrainianForm = () => {
    // правила валідації
  };

  const saveHandler = () => {
    validateUkrainianForm();
    props.onSave({});
  };

  return (
    <Requistes
      onSave={saveHandelr}
      onReset={props.onReset}
      title={props.title}
    />
  );
};

const CreateRequisitesForm = ({ isForeign }) => {
  const createRequisites = () => {};
  const resetRequisites = () => {};

  if (isForeign) {
    return (
      <ForeignRequistes
        onSave={createRequisites}
        onReset={resetRequisites}
        title={"Збереження реквізитів"}
      />
    );
  } else {
    return (
      <UkrainianRequistes
        onSave={createRequisites}
        onReset={resetRequisites}
        title={"Збереження реквізитів"}
      />
    );
  }
};

const UpdateRequisitesForm = ({ isForeign }) => {
  const updateRequisites = () => {};
  const resetRequisites = () => {};

  if (isForeign) {
    return (
      <ForeignRequistes
        onSave={updateRequisites}
        onReset={resetRequisites}
        title={"Збереження реквізитів"}
      />
    );
  } else {
    return (
      <UkrainianRequistes
        onSave={updateRequisites}
        onReset={resetRequisites}
        title={"Збереження реквізитів"}
      />
    );
  }
};
 */
/* const Requistes = (props: RequistesProps) => {
  const { onSave, onReset, title } = props;
  return  `
        <div>
            <h1>{title}</h1>
            <input type="text" placeholder="ІНН"  />
            <input type="text" placeholder="БІК"  />
            <input type="text" placeholder="НАЗВА БАНКУ"  />
            <input type="text" placeholder="НОМЕР РАХУНКУ"  />
            <button onClick={onReset}>Скинути форму</button>
            <button onClick={onSave}>Зберегти</button>
        </div>
        `;
}; */
