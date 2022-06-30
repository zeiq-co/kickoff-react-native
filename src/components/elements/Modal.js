import PropTypes from 'prop-types';
import { ScrollView, Modal, TouchableOpacity, View } from 'react-native';
import Text from './Text';

const MyModal = ({
  onRequestClose,
  children,
  isVisible,
  title,
  hideCloseIcon,
}) => (
  <Modal
    animationType="slide"
    transparent
    visible={isVisible}
    onRequestClose={onRequestClose}
  >
    <ScrollView
      keyboardShouldPersistTaps="always"
      contentContainerStyle={{
        backgroundColor: '#00000090',
        flex: 1,
      }}
    >
      <View className="py-4 px-2 flex-1 items-center justify-center">
        <View className="rounded-lg shadow-lg bg-white px-4 py-5 w-11/12">
          <View>
            {title ? (
              <Text semiBold className="text-center" size="medium">
                {title}
              </Text>
            ) : (
              <></>
            )}
            {!hideCloseIcon ? (
              <View className="items-end">
                <TouchableOpacity
                  onPress={onRequestClose}
                  className="bg-primary h-6 w-6 rounded-full justify-center items-center -mt-1"
                >
                  <Text semiBold size="small" textLite>
                    X
                  </Text>
                </TouchableOpacity>
              </View>
            ) : (
              <></>
            )}
          </View>
          {children}
        </View>
      </View>
    </ScrollView>
  </Modal>
);
MyModal.defaultProps = {
  title: '',
  onRequestClose: () => {},
};

MyModal.propTypes = {
  title: PropTypes.string,
  isVisible: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default MyModal;
