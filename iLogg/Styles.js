import { StyleSheet, Dimensions  } from 'react-native';
const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    fontFamily: 'Roboto', 
  },
  innerContainer: {
    alignItems: 'center',
    width: '100%',
    padding: '10',
    backgroundColor: '#703f8ec7',
    flex: 1,
  },
  innerContainer2: {
    marginTop: 60,
    alignItems: 'center',
    padding: '10',
    // backgroundColor: '#703f8e6b',
    flex: 1,
    width: width * 2,
    display: 'flex',  
  },
 
  text: {
    color: '#000',
  },
  heading: {
    fontSize: 24, 
    fontWeight: 'bold', 
    color: '#fff',
    textAlign: 'center',
  },
  smallText: {
    fontSize: 14,
    color: '#b4b0b0',
  }, 
  userInput: {
    marginTop: 70,
    width: '50%',
    alignItems: 'center',
  },
  input: {
    width: '90%',
    borderBottomColor: '#ffffffa8', // Set border bottom color to white
    borderBottomWidth: 1,
    color: 'white',
    marginBottom: '10%', 
  }, 

  btn1 : {
    width: '90%',
    backgroundColor: '#fff',
    alignItems: 'center',
  },

  btn2 : {
    width: '30%',
    backgroundColor: '#fff',
    alignItems: 'center',
  }, 

  text: {
    color: '#fff',
  },

  wrap: {
    marginTop: 40,
    flexDirection: 'row',
    width: '50%',
    display: 'flex',
    justifyContent: 'space-around',
  }
});
