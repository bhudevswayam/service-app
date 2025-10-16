import axios from "axios";

const BASE_URL = "http://localhost:4000/api";
const tenantId = localStorage.getItem("x-tenant-id") || "";
console.log(tenantId);

// Token and Tenant header helper
const getTokenHeader = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
    "x-tenant-id": tenantId,
  },
});

// ==============================
// 🔹 Create Service
// ==============================
export const createService = async (data) => {
  const res = await axios.post(`${BASE_URL}/services`, data, getTokenHeader());
  return res.data;
};

// ==============================
// 🔹 Get All Services (optionally by business ID)
// ==============================
export const getServices = async (businessId = "") => {
  const query = businessId ? `?business=${businessId}` : "";
  const res = await axios.get(`${BASE_URL}/services${query}`, getTokenHeader());
  return res.data;
};

// ==============================
// 🔹 Get Service by ID
// ==============================
export const getServiceById = async (id) => {
  const res = await axios.get(`${BASE_URL}/services/${id}`, getTokenHeader());
  return res.data;
};

// ==============================
// 🔹 Update Service
// ==============================
export const updateService = async (id, data) => {
  const res = await axios.put(`${BASE_URL}/services/${id}`, data, getTokenHeader());
  return res.data;
};

// ==============================
// 🔹 Delete / Deactivate Service
// ==============================
export const deleteService = async (id) => {
  const res = await axios.delete(`${BASE_URL}/services/${id}`, getTokenHeader());
  return res.data;
};

// ==============================
// 🔹 Bulk Delete Services (optional helper)
// ==============================
export const bulkDeleteServices = async (ids) => {
  const res = await axios.delete(`${BASE_URL}/services`, {
    ...getTokenHeader(),
    data: { ids },
  });
  return res.data;
};
