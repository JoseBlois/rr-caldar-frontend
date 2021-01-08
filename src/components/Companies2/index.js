import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

import ConfirmationMessage from '../sharedComponents/ConfirmationMessage';
import Modal from '../sharedComponents/Modal';
import CompaniesForm from './CompaniesForm';

import styles from './companies.module.css';
import {
  getCompanies as getCompaniesAction,
  deleteCompany as deleteCompanyAction,
  addCompany as addCompanyAction,
  updateCompany as updateCompanyAction,
} from '../../redux/actions/companiesActions';

const companiesComponent = ({
  companies,
  getCompanies,
  deleteCompany,
  addCompany,
  updateCompany,
}) => {
  const [modal, setModal] = useState({
    show: false,
    type: '',
    meta: {},
  });

  const onCloseModal = () => {
    setModal({
      show: false,
      type: '',
      meta: {},
    });
  };

  const removeCompany = (id) => {
    deleteCompany(id);
    onCloseModal();
  };

  useEffect(() => {
    getCompanies();
  }, []);

  return (
    <>
      <div className={styles.CompaniesContainer}>
        {companies.loading ? <span>LOADING COMPANIES DATA...</span>
          : (
            <table className={styles.companiesTable}>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Address</th>
                  <th>CUIT</th>
                  <th>Phone</th>
                  <th>Email</th>
                  <th className={styles.actionsRow}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {companies.list.map((company) => (
                  <tr key={company._id}>
                    <td>{company.name}</td>
                    <td>{company.address}</td>
                    <td>{company.cuit}</td>
                    <td>{company.phone}</td>
                    <td>{company.email}</td>
                    <td>
                      <FontAwesomeIcon
                        style={{ marginRight: '10px' }}
                        icon={faPen}
                        size="lg"
                        onClick={() => setModal({
                          show: true,
                          type: 'UPDATE',
                          meta: {
                            company,
                            title: 'Update Company',
                          },
                        })}
                      />
                      <FontAwesomeIcon
                        icon={faTrash}
                        size="lg"
                        onClick={() => setModal({
                          show: true,
                          type: 'DELETE',
                          meta: {
                            id: company._id,
                            title: 'Delete Company',
                          },
                        })}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
      </div>
      <div className={styles.addButtonContainer}>
        <button
          type="button"
          className={styles.addButton}
          onClick={() => setModal({
            show: true,
            type: 'ADD',
            meta: {
              title: 'Add new Company',
            },
          })}
        >
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
      {modal.show && (
        <Modal title={modal.meta.title} onClose={onCloseModal}>
          {modal.type === 'ADD'
            && (
            <CompaniesForm
              onSubmit={(company) => {
                addCompany(company);
                onCloseModal();
              }}
              onClose={onCloseModal}
            />
            )}
          {modal.type === 'DELETE'
            && <ConfirmationMessage onSubmit={() => removeCompany(modal.meta.id)} onClose={onCloseModal} entity="Company" />}
          {modal.type === 'UPDATE'
            && (
              <CompaniesForm
                onSubmit={(company, id) => {
                  updateCompany(company, id);
                  onCloseModal();
                }}
                onClose={onCloseModal}
                Company={modal.meta.Company}
              />
            )}
        </Modal>
      )}
    </>
  );
};

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    getCompanies: getCompaniesAction,
    deleteCompany: deleteCompanyAction,
    addCompany: addCompanyAction,
    updateCompany: updateCompanyAction,
  }, dispatch)
);

const mapStateToProps = (state) => ({
  companies: state.companies,
});

export default connect(mapStateToProps, mapDispatchToProps)(companiesComponent);
