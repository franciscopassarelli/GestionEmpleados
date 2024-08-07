import { useState } from 'react';
import { useRouter } from 'next/router';
import Alert from '../components/Alert';
import styles from '../styles/AddProject.module.css';

export default function AddProject() {
  const [newProject, setNewProject] = useState({
    name: '',
    description: '',
    manager: '',
    assignedTo: '',
    status: ''
  });
  const [alerts, setAlerts] = useState([]);
  const router = useRouter();

  const addProject = () => {
    if (newProject.name && newProject.description && newProject.manager && newProject.assignedTo && newProject.status) {
      const savedProjects = JSON.parse(localStorage.getItem('projects')) || [];
      savedProjects.push({ id: Date.now(), ...newProject });
      localStorage.setItem('projects', JSON.stringify(savedProjects));

      // Add success alert
      setAlerts((prevAlerts) => [...prevAlerts, { message: 'Project added successfully!', type: 'success' }]);

      // Redirect after a short delay to allow the alert to be seen
      setTimeout(() => {
        router.push('/my-project');
      }, 1500);
    } else {
      setAlerts((prevAlerts) => [...prevAlerts, { message: 'Please fill out all fields.', type: 'error' }]);
    }
  };

  const handleCloseAlert = () => {
    setAlerts((prevAlerts) => prevAlerts.slice(1));
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Add Project</h1>
      <div className={styles.inputGroup}>
        <label className={styles.label}>Project Name</label>
        <input
          className={styles.input}
          type="text"
          value={newProject.name}
          onChange={(e) => setNewProject({ ...newProject, name: e.target.value })}
        />
        <label className={styles.label}>Project Description</label>
        <input
          className={styles.input}
          type="text"
          value={newProject.description}
          onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
        />
        <label className={styles.label}>Project Manager</label>
        <select
          className={styles.select}
          value={newProject.manager}
          onChange={(e) => setNewProject({ ...newProject, manager: e.target.value })}
        >
          <option value="">Select Manager</option>
          <option value="Manager1">Manager 1</option>
          <option value="Manager2">Manager 2</option>
        </select>
        <label className={styles.label}>Assigned To</label>
        <select
          className={styles.select}
          value={newProject.assignedTo}
          onChange={(e) => setNewProject({ ...newProject, assignedTo: e.target.value })}
        >
          <option value="">Select Assignee</option>
          <option value="Employee1">Employee 1</option>
          <option value="Employee2">Employee 2</option>
        </select>
        <label className={styles.label}>Status</label>
        <select
          className={styles.select}
          value={newProject.status}
          onChange={(e) => setNewProject({ ...newProject, status: e.target.value })}
        >
          <option value="">Select Status</option>
          <option value="Not Started">Not Started</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
        <button className={styles.button} onClick={addProject}>Add Project</button>
      </div>
      {alerts.map((alert, index) => (
        <Alert
          key={index}
          message={alert.message}
          type={alert.type}
          onClose={handleCloseAlert}
        />
      ))}
    </div>
  );
}
