export default function Tabs({ children, buttons, ButtonsContaienr = "menu" }) {
  //   const ButtonsContaienr = buttonsContainer;

  return (
    <>
      <ButtonsContaienr>{buttons}</ButtonsContaienr>
      {children}
    </>
  );
}
