// Auto-mock seluruh method Joi dengan menggunakan Proxy
function createMockJoi() {
  const mockSchema = { validate: () => ({}) };
 
  return new Proxy({}, {
    get() {
      return () => mockSchema; // Memanggil method apa pun mengembalikan mockSchema
    }
  });
}
 
async function createJoi() {
 // Ketika bukan development, kembalikan Joi palsu untuk menghindari beban bundle
 if (!import.meta.env.DEV) return createMockJoi();
 
 // Dynamic import hanya dilakukan di lingkungan pengembangan
 return (await import('joi')).default;
}
 
export const J = await createJoi();
 
export function validateProps(schema, props, componentName) {
 // Lewati validasi jika bukan development
 if (!import.meta.env.DEV) return props;
 
 const validationResult = schema.validate(props, { abortEarly: false });
 
 if (validationResult.error) {
   const { details } = validationResult.error;
   details.forEach((detail) => {
     console.warn(`[${ componentName }] Prop validation error: ${ detail.message }`);
   });
 }
 
 return validationResult.value;
}