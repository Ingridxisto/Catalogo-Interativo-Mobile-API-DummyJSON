import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  blue: {
    height: 180,
    backgroundColor: '#2567E8',  
    alignItems: 'center',
  },
  white: {
    alignItems: 'center',
    backgroundColor: '#fff',
    marginTop: -30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 90,
    borderWidth: 3,
    borderColor: '#fff',
    marginTop: -50,
    backgroundColor: '#ccc',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 10,
  },
  email: {
    fontSize: 19,
    color: '#656565',
    marginBottom: 20,
  },
  menu: {
    width: '90%',
    marginTop: 10,
    gap: 12,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    borderRadius: 10,
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#ccc',
  },
  menuText: {
    marginLeft: 15,
    fontSize: 17,
    color: '#222',
    flex: 1,
  },
  logoutButton: {
    backgroundColor: '#e53935',
    marginHorizontal: 20,
    marginTop: 20,
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  logoutText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 17,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
    padding: 20,
  },
  modalBox: {
    backgroundColor: '#fff',
    padding: 25,
    borderRadius: 10,
  },
  modalTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
  },
  modalMessage: {
    fontSize: 15,
    marginBottom: 20,
  },
  modalActions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  cancelButton: {
    marginRight: 10,
    paddingVertical: 6,
    paddingHorizontal: 14,
    backgroundColor: '#eee',
    borderRadius: 6,
  },
  confirmButton: {
    paddingVertical: 6,
    paddingHorizontal: 14,
    backgroundColor: '#e53935',
    borderRadius: 6,
  },
});
