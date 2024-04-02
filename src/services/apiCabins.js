import supabase, { supabaseUrl } from './supabase';

export async function getCabins() {
  const { data, error } = await supabase.from('cabins').select('*');

  if (error) {
    console.log(error);
    throw new Error('cabins could not be loaded');
  }
  return data;
}

export async function createCabin(newCabin) {
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    '/',
    ''
  );

  const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  // https://vrtiehbsmtydorqtqojv.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg
  // 1.create cabin
  const { data, error } = await supabase
    .from('cabins')
    .insert([{ ...newCabin, image: imagePath }]);

  if (error) {
    console.log(error);
    throw new Error('Cabin could not be created ');
  }

  // 2. Upload Image

  const { error: storageError } = await supabase.storage
    .from('cabin-images')
    .upload(imageName, newCabin.image);

  // 3. delete cabin if erro in uploading image

  if (storageError) {
    await supabase.from('cabins').delete().eq('id', data.id);
    console.log(storageError);

    throw new Error('Image could not be upoloaded, cabin not created');
  }
  return data;
}

export async function deleteCabin(id) {
  const { data, error } = await supabase.from('cabins').delete().eq('id', id);
  if (error) {
    console.log(error);

    throw new Error('cabins could not be deleted');
  }
  return data;
}
