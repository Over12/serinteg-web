import '../../styles/components/common/NotificationPop.css';

export function NotificationPop({ message, status }) {
  return (
    <div className={`notification-pop ${status}`}>
      <p>{message}</p>
    </div>
  );
}