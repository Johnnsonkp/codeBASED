import './loading.css'
// import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css';

const LoadingOverlay = () => {
  return (
    <div className="loading-overlay">
      <i className="fas fa-circle-notch fa-spin fa-5x loading-icon"></i>
    </div>
  );
};

export default LoadingOverlay;

