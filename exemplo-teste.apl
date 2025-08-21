.head 1 +  Dialog Box: dlg_abatnc
.head 2 -  Class: Dlg_Padrao
.head 2 -  Title: Abatimento de Notas de Crédito
.head 2 +  Contents
.head 3 +  Data Field: df_cd_clien
.head 4 -  Class: Df_Numero
.head 4 +  Data
.head 5 -  Maximum Data Length: 8
.head 5 -  Data Type: Class Default
.head 4 +  Message Actions
.head 5 +  On SAM_Validate
.head 6 -  Call SalWaitCursor( TRUE )
.head 6 +  If NOT FunMontaCliente( df_cd_clien )
.head 7 -  Call SalWaitCursor( FALSE )
.head 7 -  Return FALSE
.head 6 -  Call SalWaitCursor( FALSE )
.head 6 -  Return TRUE
.head 3 +  Child Table: tbl_nota_cred
.head 4 -  Class: Tbl_Child
.head 4 +  Contents
.head 5 +  Column: col_valor
.head 6 -  Class: Col_Money
.head 6 -  Title: Valor
.head 6 +  Message Actions
.head 7 +  On SAM_Click
.head 8 +  If col_abater
.head 9 -  Set col_abater = 0
.head 8 +  Else
.head 9 -  Set col_abater = 1
.head 8 -  Return TRUE
.head 4 +  Functions
.head 5 +  Function: FunMontaTabela
.head 6 +  Returns
.head 7 -  Boolean:
.head 6 +  Local variables
.head 7 -  String: str_where
.head 7 -  Number: nu_linha
.head 6 +  Actions
.head 7 -  Set str_where = STRING_Null
.head 7 +  If boo_win_vt_pcfg_det[ 1 ]
.head 8 -  Set str_where = str_where || " AND ISNULL( tr.especial, 0 ) = :rb_especial "
.head 7 -  Return TRUE
