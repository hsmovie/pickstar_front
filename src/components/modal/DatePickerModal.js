import React, { Component } from 'react'
import { View, Text, Modal, TouchableWithoutFeedback } from 'react-native'
import { width, height } from '../../utils/layout'
import { ButtonWithoutFeedback } from '../common'
import { Calendar, LocaleConfig } from 'react-native-calendars'

class DatePickerModal extends Component {
  state = {}

  onDayPress = (date) => {
    this.setState({
      selected: date.dateString
    });
  }
  
  render() {
    const {
      modalVisible,
      leftButtonText,
      rightButtonText,
      leftButtonFn,
      rightButtonFn,
      closeModalFn,
    } = this.props

    return (
      <Modal
        animationType="fade"
        transparent
        visible={modalVisible}
        onRequestClose={() => {
          console.log('Modal has been closed.')
        }}
      >
        <View style={styles.containerStyle}>
          <Calendar
            style={styles.calenderStyle}
            onDayPress={this.onDayPress}
            // Handler which gets executed on day long press. Default = undefined
            // onDayLongPress={(day) => {console.log('selected day', day)}}
            // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
            monthFormat={'yyyy MM'}
            // Handler which gets executed when visible month changes in calendar. Default = undefined
            onMonthChange={(month) => {console.log('month changed', month)}}
            // Hide month navigation arrows. Default = false
            // hideArrows={true}
            // Replace default arrows with custom ones (direction can be 'left' or 'right')
            // renderArrow={(direction) => (<Arrow />)}
            // Do not show days of other months in month page. Default = false
            // hideExtraDays={true}
            // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
            firstDay={1}
            // Handler which gets executed when press arrow icon left. It receive a callback can go back month
            onPressArrowLeft={substractMonth => substractMonth()}
            // Handler which gets executed when press arrow icon left. It receive a callback can go next month
            onPressArrowRight={addMonth => addMonth()}
            markedDates={{
              [this.state.selected]: {selected: true, selectedColor: '#f78462'}
            }}
          >
          </Calendar>
          <View style={styles.buttonsContainer}>
            <ButtonWithoutFeedback
              onPress={closeModalFn}
              viewStyle={[styles.buttonStyle, {marginRight: 10}]}
              textStyle={{color: '#b5bec6'}}
            >
              Cancel
            </ButtonWithoutFeedback>
            <ButtonWithoutFeedback
              onPress={rightButtonFn({type: this.props.type, date: this.state.selected})}
              viewStyle={[styles.buttonStyle]}
              textStyle={{color: '#fe5167'}}
            >
              Ok
            </ButtonWithoutFeedback>
          </View>
          <ButtonWithoutFeedback
            viewStyle={styles.backgroundStyle}
            onPress={closeModalFn}
          />
        </View>
      </Modal>
    )
  }
}
const styles = {
  containerStyle: {
    justifyContent: 'center',
    alignSelf: 'stretch',
    alignItems: 'center',
    flex: 1,
    // marginTop: (height - 215) / 2,
    // height: 215,
    // width: 290,
    backgroundColor: 'rgba(0, 0, 0, 0.4)'
  },
  calenderStyle: {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    width: 300,
    zIndex: 3,
  },
  buttonsContainer: {
    zIndex: 3,
    flexDirection: 'row',
    alignSelf: 'center',
    backgroundColor: '#fff',
    width: 300,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    paddingTop: 50,
    justifyContent: 'flex-end',
  },
  buttonStyle: {
    height: 50,
    width: 80,
  },
  backgroundStyle: {
    zIndex: 2,
    flex: 1,
    width: '100%',
    height: '100%',
    position: 'absolute',
    alignSelf: 'stretch',
  },
}

export { DatePickerModal }
