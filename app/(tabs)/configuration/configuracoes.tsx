import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Modal } from 'react-native';
import { styles } from '../configuration/styles';
import { AntDesign, Feather } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useDispatch } from 'react-redux';
import { logoutUser } from '@/src/store/slices/logout'

export default function Configuracoes() {
  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <View style={styles.blue}
      />

      <View style={styles.white}>
        <Image 
        source={require('../../../src/assets/image-person.jpg')} 
        style={styles.image}
        />
        <Text style={styles.name}>João da Silva</Text>
        <Text style={styles.email}>joaodasilva@gmail.com</Text>
      

      {/* Itens de menu */}
      <View style={styles.menu}>
        <MenuItem icon="user" label="Meus dados" />
        <MenuItem icon="bell" label="Notificações" />
        <MenuItem icon="file-text" label="Termos de uso" />
      </View>
    </View>

      {/* Botão de sair */}
      <TouchableOpacity style={styles.logoutButton} onPress={() => setModalVisible(true)}>
        <Text style={styles.logoutText}>Sair da conta</Text>
      </TouchableOpacity>

      {/* Modal de confirmação */}
      <Modal transparent={true} visible={modalVisible} animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <Text style={styles.modalTitle}>Sair da conta</Text>
            <Text style={styles.modalMessage}>Você tem certeza que deseja sair da conta?</Text>
            <View style={styles.modalActions}>
              <TouchableOpacity style={styles.cancelButton} onPress={() => setModalVisible(false)}>
                <Text>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={styles.confirmButton} onPress={() => {
                  setModalVisible(false);
                  dispatch(logoutUser()); 
                  router.replace('/login');
              }}>
                <Text style={{ color: '#fff' }}>Sair</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

function MenuItem({ icon, label }: { icon: any, label: string }) {
  return (
    <TouchableOpacity style={styles.menuItem}>
      <Feather name={icon} size={22} color="#222" />
      <Text style={styles.menuText}>{label}</Text>
      <AntDesign name="right" size={16} color="#999" style={{ marginLeft: 'auto' }} />
    </TouchableOpacity>
  );
}


