/**
 * =========================================================================
 *  PRIORITY SERVICES IMAGE CONFIGURATION
 * =========================================================================
 * 
 * Want to use your own photos? It's super easy:
 * 
 * OPTION 1 (EASIEST - NO CODE NEEDED): 
 *   Simply drop your image files into the `public/` folder with these exact names:
 *   - Full Restoration photo: `public/priority-restoration.jpg`
 *   - Roof Repairs photo:     `public/priority-repairs.jpg`
 *   - Leak Detection photo:   `public/priority-leak.jpg`
 *   They will appear immediately!
 * 
 * OPTION 2 (CUSTOM FILENAME OR WEB URL):
 *   Put your image into the `public/` folder and update the path below,
 *   e.g. '/my-job-1.jpg' or paste any web link 'https://...'.
 */

export const PRIORITY_SERVICE_IMAGES: Record<string, string> = {
  // Card 1: Full Roof Restoration & Painting
  'full-roof-restoration': '/priority-restoration.jpg',

  // Card 2: Roof Repairs & Maintenance
  'roof-repairs': '/priority-repairs.jpg',

  // Card 3: Leak Detection & Fast Repairs
  'leak-detection-repairs': '/priority-leak.jpg',
};
