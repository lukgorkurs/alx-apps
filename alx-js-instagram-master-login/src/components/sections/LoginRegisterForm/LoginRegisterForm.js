import Button from "components/atoms/Button/Button";
import Input from "components/atoms/Input/Input";


function LoginRegisterForm(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <label>
          email
          <Input
            value={props.mailInput}
            onChange={props.handleMailChange}
          />
        </label>
        {
          props.isMailInputError
            ? <small>Pole mail nie moze byc puste </small>
            : null
        }
      </div>
      <div>
        <label>
          pass
          <Input
            value={props.passInput}
            onChange={props.handlePassChange}
          />
        </label>
        {
          props.isPassInputError
            ? <small>Pole password musi miec minimum 3 znaki</small>
            : null
        }
      </div>
      <Button
        text={props.buttonText}
      />
      
      {props.text}
      
    </form>
  )
}

export default LoginRegisterForm;



