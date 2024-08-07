import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from '../styles/MyProject.module.css';
import Alert from '../components/Alert'; // Ensure the path is correct
import ConfirmDeleteModal from '../components/ConfirmDeleteModal'; // Import the modal

export default function MyProject() {
  const [projects, setProjects] = useState([]);
  const [openMenu, setOpenMenu] = useState(null);
  const [alert, setAlert] = useState(null);
  const [deleteProjectId, setDeleteProjectId] = useState(null); // To handle the project to delete

  useEffect(() => {
    const savedProjects = JSON.parse(localStorage.getItem('projects')) || [];
    setProjects(savedProjects);
  }, []);
  
  const handleDeleteClick = (id) => {
    setDeleteProjectId(id);
  };

  const handleConfirmDelete = () => {
    const updatedProjects = projects.filter(project => project.id !== deleteProjectId);
    localStorage.setItem('projects', JSON.stringify(updatedProjects));
    setProjects(updatedProjects);
    setDeleteProjectId(null);

    // Show the alert
    setAlert({ message: 'Project successfully deleted', type: 'success' });
  };

  const handleCancelDelete = () => {
    setDeleteProjectId(null); //  Close the modal
  };

  // Function to close the alert
  const handleCloseAlert = () => {
    setAlert(null);
  };

  const toggleMenu = (id) => {
    setOpenMenu(openMenu === id ? null : id);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>My Projects</h1>
      {projects.length === 0 ? (
        <p className={styles.noProjects}>You have no projects added.</p>
      ) : ( 
      <table className={styles.projectTable}>
        <thead>
          <tr>
            <th>Project Name</th>
            <th>Description</th>
            <th>Manager</th>
            <th>Assigned To</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
  {projects.map((project) => (
    <tr key={project.id}>
      <td data-label="Project Name">{project.name}</td>
      <td data-label="Description">{project.description}</td>
      <td data-label="Manager">{project.manager}</td>
      <td data-label="Assigned To">{project.assignedTo}</td>
      <td data-label="Status">{project.status}</td>
      <td data-label="Actions" className={styles.actionCell}>
        <button 
          className={styles.actionButton} 
          onClick={() => toggleMenu(project.id)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="5" r="2" fill="#333"/>
            <circle cx="12" cy="12" r="2" fill="#333"/>
            <circle cx="12" cy="19" r="2" fill="#333"/>
          </svg>
        </button>
        {openMenu === project.id && (
          <div className={styles.dropdownMenu}>
            <Link href={`/edit-project/${project.id}`} className={styles.editButton}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.293 3.293a1 1 0 0 1 1.414 0l6.707 6.707a1 1 0 0 1 0 1.414L10.414 19.707a1 1 0 0 1-1.414 0l-6.707-6.707a1 1 0 0 1 0-1.414l6.707-6.707z" fill="#333"/>
              </svg>
              Edit
            </Link>
            <button 
              className={styles.deleteButton} 
              onClick={() => handleDeleteClick(project.id)}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 19c0 1.104.896 2 2 2h8c1.104 0 2-.896 2-2V7H6v12zM17 3h-2V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1 1v1H7c-1.104 0-2 .896-2 2v1h14V5c0-1.104-.896-2-2-2z" fill="#d9534f"/>
              </svg>
              Delete
            </button>
          </div>
        )}
      </td>
    </tr>
  ))}
</tbody>


      </table>
      )}
      {alert && <Alert message={alert.message} type={alert.type} onClose={handleCloseAlert} />}
      {deleteProjectId && (
        <ConfirmDeleteModal
          onConfirm={handleConfirmDelete}
          onCancel={handleCancelDelete}
        />
      )}
    </div>
  );
}
