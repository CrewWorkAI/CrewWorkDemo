const canvas = document.getElementById('renderCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Define constants and utilities here
const PI = Math.PI;
const EPSILON = 1e-6;

// Basic shapes and materials
class Sphere {
    constructor(center, radius, material) {
        this.center = center;
        this.radius = radius;
        this.material = material;
    }
}

class Material {
    constructor(ka, kd, ks, shininess) {
        this.ka = ka; // Ambient coefficient
        this.kd = kd; // Diffuse coefficient
        this.ks = ks; // Specular coefficient
        this.shininess = shininess;
    }
}

// Ray class
class Ray {
    constructor(origin, direction) {
        this.origin = origin;
        this.direction = direction;
    }
}

// Intersection result
class Intersection {
    constructor(t, point, normal, material) {
        this.t = t;
        this.point = point;
        this.normal = normal;
        this.material = material;
    }
}

// Phong lighting model
function phongLighting(intersection, light, camera, ambientLight) {
    const { point, normal } = intersection;
    const lightDirection = vec3.sub(light.position, point);
    const diffuse = Math.max(vec3.dot(normal, lightDirection), 0);
    const reflection = vec3.reflect(vec3.negate(lightDirection), normal);
    const viewDirection = vec3.normalize(camera.origin - point);
    const specular = Math.pow(Math.max(vec3.dot(viewDirection, reflection), 0), intersection.material.shininess);

    return vec3.add(
        vec3.scale(intersection.material.ka, ambientLight),
        vec3.scale(vec3.scale(intersection.material.kd, diffuse), light.color),
        vec3.scale(vec3.scale(intersection.material.ks, specular), light.color)
    );
}

// Ray-sphere intersection
function raySphereIntersection(ray, sphere) {
    const oc = vec3.sub(ray.origin, sphere.center);
    const a = vec3.dot(ray.direction, ray.direction);
    const b = 2 * vec3.dot(oc, ray.direction);
    const c = vec3.dot(oc, oc) - sphere.radius * sphere.radius;
    const discriminant = b * b - 4 * a * c;

    if (discriminant < 0) {
        return null;
    }

    const t1 = (-b - Math.sqrt(discriminant)) / (2 * a);
    const t2 = (-b + Math.sqrt(discriminant)) / (2 * a);

    if (t1 > EPSILON) {
        const point = vec3.add(ray.origin, vec3.scale(ray.direction, t1));
        const normal = vec3.normalize(vec3.sub(point, sphere.center));
        return new Intersection(t1, point, normal, sphere.material);
    } else if (t2 > EPSILON) {
        const point = vec3.add(ray.origin, vec3.scale(ray.direction, t2));
        const normal = vec3.normalize(vec3.sub(point, sphere.center));
        return new Intersection(t2, point, normal, sphere.material);
    }

    return null;
}

// Scene setup
const scene = {
    spheres: [
        new Sphere(vec3.create([0, 0, -5]), 1, new Material(0.2, 0.8, 0.2, 20))
    ],
    lights: [
        { position: vec3.create([-10, 10, -10]), color: vec3.create([1, 1, 1]) },
        { position: vec3.create([10, 10, 10]), color: vec3.create([1, 0.5, 0.5]) }
    ],
    ambientLight: vec3.create([0.2, 0.2, 0.2])
};

// Camera
const camera = {
    origin: vec3.create([0, 0, 0]),
    forward: vec3.normalize(vec3.create([0, 0, -1])),
    up: vec3.normalize(vec3.create([0, 1, 0])),
    right: vec3.cross(camera.forward, camera.up),
    fov: PI / 4
};

// Rendering function
function render() {
    const width = canvas.width;
    const height = canvas.height;
    const aspectRatio = width / height;

    ctx.clearRect(0, 0, width, height);

    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            const u = (2 * x / width) - 1;
            const v = -(2 * y / height) + 1;

            const screenPoint = vec3.create([
                u * aspectRatio,
                v,
                -1
            ]);

            const ray = new Ray(camera.origin, vec3.normalize(vec3.sub(screenPoint, camera.origin)));

            let color = vec3.create([0, 0, 0]);
            let tMin = Infinity;
            let closestIntersection = null;

            for (const sphere of scene.spheres) {
                const intersection = raySphereIntersection(ray, sphere);
                if (intersection && intersection.t < tMin) {
                    tMin = intersection.t;
                    closestIntersection = intersection;
                }
            }

            if (closestIntersection) {
                color = phongLighting(closestIntersection, scene.lights[0], camera, scene.ambientLight);
            }

            ctx.fillStyle = `rgb(${color[0] * 255}, ${color[1] * 255}, ${color[2] * 255})`;
            ctx.fillRect(x, y, 1, 1);
        }
    }
}

// Main loop
function main() {
    render();
}

main();