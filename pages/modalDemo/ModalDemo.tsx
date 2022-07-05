import {SafeAreaView, Button} from 'react-native';
import React, {useState} from 'react';
import ModalComp from '../../components/modal/ModalComp';

const ModalDemo = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <SafeAreaView>
        <Button
          title="open modal"
          color={'blue'}
          onPress={() => {
            setModalOpen(true);
          }}
        />
      </SafeAreaView>
      <ModalComp
        isOpen={modalOpen}
        buttons={[
          {
            name: 'CLOSE',
            action: () => {
              setModalOpen(false);
            },
            buttonColor: 'white',
            textColor: 'black',
            borderColor: 'green',
          },
          {
            name: 'OPEN EMAIL',
            action: () => {},
            buttonColor: 'green',
            textColor: 'white',
          },
        ]}
        heading="Check Your Email"
        content="You should have recieved an email that contains your username "
      />
    </>
  );
};

export default ModalDemo;
