import styles from './pagination.module.css'

const User = ({ user }) => {
  return (
    <article className={styles.user}>
      <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
      <div className={styles.userBody}>
        <h2>{`${user.first_name} ${user.last_name}`}</h2>
        <p>Email: {user.email}</p>
        <p>User ID: {user.id}</p>
      </div>
    </article>
  )
}

export default User
