import React from "react";
import styled from "styled-components";
import "antd/dist/antd.css";

const AdminWhole = styled.div`
  display: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;

const AdminMenuWrapper = styled.div`
  width: 220px;
  height: 100%;
  background-color: #340134;
`;

const AdminContentWrapper = styled.div`
  width: calc(100% - 220px);
  height: 100%;
  padding: 20px;
`;

const AdminLayout = ({ children }) => {
  return (
    <AdminWhole>
      <AdminMenuWrapper>MENU</AdminMenuWrapper>
      <AdminContentWrapper>{children}</AdminContentWrapper>
    </AdminWhole>
  );
};

export default AdminLayout;
