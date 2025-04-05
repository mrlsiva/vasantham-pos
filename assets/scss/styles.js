export default StyleSheet.create({
  container: {
    flex: 1,
    gap: 12,
    flexDirection: 'row',
  },
  mainContent: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  filters: {
    marginBottom: 10,
  },
  productGrid: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  orderSummary: {
    padding: 10,
    borderTopWidth: 1,
    marginTop: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
    fontWeight: '600',
    color: '#333',
  },
  fullWidth: {
    width: '100%',
    paddingTop: 12,
    paddingRight: 12,
    gap: 6,
    display: 'flex',
    flexDirection: 'column',
  },
  pickerWrapper: {
    backgroundColor: '#19AD9F',
    borderRadius: 8,
    overflow: 'hidden',
  },
  picker: {
    overflow: 'hidden',
    padding: 8,
    height: 36,
    color: '#000',
  },
  h2: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
});
