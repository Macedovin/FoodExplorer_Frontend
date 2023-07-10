import { ChangeButton } from './styles';

import { Button } from '../../components/Button' 

import { ReactComponent as NewOption } from '../../assets/icons/Plus.svg';

export function SelectButton({ onClick }) {
  return(
    <ChangeButton onClick={onClick} >
      <Button 
        type='button'
        icon={NewOption}
      />
    </ChangeButton>
  );
}