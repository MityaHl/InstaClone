import { StyleSheet } from 'aphrodite';

export default StyleSheet.create({
    profileWrapper: {
    marginTop: '40px',
  },
  media: {
    height: 10,
    paddingTop: '56.25%', 
  },
  avatar: {
    width: '220px',
    height: '220px',
    objectFit: 'cover'
  },
  avatarWrapper: {
    display: 'flex', 
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  infoWrapper: {
    display: 'flex', 
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  textField: {
    marginRight: '20px'
  },
  changeInfoWrapper: {
    marginTop: '20px'
  },
  postTitle: {
    marginTop: '50px',
    marginRight: '50px',
    marginBottom: '30px',
    display: 'flex', 
    flexDirection: 'row',
    justifyContent: 'center',
  }
})